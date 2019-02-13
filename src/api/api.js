import { get } from './crud'


/**
 * Gets the user's organisation units along with their descendants.
 * @returns {Object[]} Organisation units.
 */
export async function getOrgUnits() {
    // Getting the id's of the users OU's.
    const maxLevel = (await get(
        'organisationUnits.json?fields=level&pageSize=1&order=level:desc'
    )).organisationUnits[0].level
    let childrenString = ''
    for (let i = 0; i < maxLevel; i++)
        childrenString += ',children[id,displayName'
    for (let i = 0; i < maxLevel; i++) childrenString += ']'
    const userOrgUnits = (await get('me.json?fields=organisationUnits'))
        .organisationUnits
    let orgUnitsString = '[' + userOrgUnits[0].id
    for (let i = 1; i < userOrgUnits.length; i++)
        orgUnitsString += ',' + userOrgUnits[i].id
    orgUnitsString += ']'

    // Getting the OU's with descendants.
    let data = (await get(
        'organisationUnits.json?filter=id:in:' +
            orgUnitsString +
            '&paging=false&order=level:asc&fields=id,displayName' +
            childrenString
    )).organisationUnits

    const sortChildren = orgUnit => {
        if (orgUnit.children)
            if (orgUnit.children.length) {
                for (let i = 0; i < orgUnit.children.length; i++)
                    sortChildren(orgUnit.children[i])
                orgUnit.children.sort((a, b) =>
                    a.displayName > b.displayName
                        ? 1
                        : b.displayName > a.displayName
                        ? -1
                        : 0
                )
            }
    }

    // Sorting children by display name.
    for (let i = 0; i < data.length; i++) sortChildren(data[i])

    return data
}