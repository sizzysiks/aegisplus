// The path has to be relative to the location of this function | 'utils../assets....'
export function getImgUrl(id, name) {
    return new URL(`../assets/projects/${id}/${name}`, import.meta.url).href
}