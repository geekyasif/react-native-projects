const apiKey = "f44fe3073fa348b488d0c8ba983d8ef9"  // news api
// const apiKey = "563492ad6f917000010000014d683c830712401d8ef94a00f6ff2980" // pexel api


const request = {
    entertainment: `/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`,
    business: `/top-headlines?country=in&category=business&apiKey=${apiKey}`,
    health: `/top-headlines?country=in&category=health&apiKey=${apiKey}`,
    science: `/top-headlines?country=in&category=science&apiKey=${apiKey}`,
    sports: `/top-headlines?country=in&category=sports&apiKey=${apiKey}`,
    technology:  `/top-headlines?country=in&category=technology&apiKey=${apiKey}`,

    // nature : `/search?query=nature&per_page=1`
}

export default request