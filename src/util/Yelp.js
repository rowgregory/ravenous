const apiKey = "s3QOYYifDQMzCUdVE-dj5aNVdR5y_tCq60S8m0FZC3-lux0gA9GbPfkzWlAPVy1aqYT3pkL3l-BegUk5b2a29ZfZ8SBopjMAshwo5llXtDJi-BMyFLM306ZDFCooXHYx";

// This object will store the functionality 
// needed to interact with the Yelp API.
const Yelp = {

    searchYelp(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(((business) => {
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        price: business.price,
                        url: business.url
                    }
                    

                }))
            }
        });
    }
};
export default Yelp;


