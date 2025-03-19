// utility function to create an array of paragraphs from the form data
export const createParagraphsArray = (formData) => {
    let paragraphs = []
    for (let key in formData) {
        if (key.includes('paragraph')) {
            if (formData[key] !== '') {
                paragraphs.push(formData[key])
            }
            delete formData[key]
        }
    }
    return paragraphs
}
