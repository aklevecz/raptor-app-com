/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let imgURL = "https://instabao-be.pages.dev/images"
    let imgRes = await fetch(imgURL)


    let imgData = await imgRes.json()

    // @ts-ignore
    const first20Images = imgData.filter((item) => item.contentType === "image/jpeg").slice(0, 20)
    let height = 375
    let imgResizeURL = `https://baos.haus/cdn-cgi/image/width=auto,quality=100,fit=contain,height=${height}/`
    const assetBaseURL = "https://r2.baos.haus/"

    // @ts-ignore
    const resizedImgURLs =  first20Images.map((imgObject) => {
        return imgResizeURL + assetBaseURL + imgObject.key
    })
    console.log(resizedImgURLs)
    return {resizedImgURLs};
};