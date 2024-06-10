const reviews = [
    {
        text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
        reviewer: "Diksha Pande",
        title: "Co-founder, Samosa Party",
        image: "public/samosa.jpg",
        reviewerimage: "public/ptal_ceo.jpg",

        stats: [
            {
                gradientText: "upto 95%",
                blackText: "Demand Fulfilment"
            },
            {
                gradientText: "< 3%",
                blackText: "Daily Stock-out"
            }
        ]
    },
    {
        text: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked. While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
        reviewer: "Kirti Goel",
        title: "Co-founder, PTal",
        image: "public/pital.jpg",
        reviewerimage: "public/ptal_ceo.jpg",
        stats: [
            {
                gradientText: "Automated Invoice Reconciliation",
                blackText: ""
            },
            {
                gradientText: "Channel wise Sales Classification",
                blackText: ""
            }
        ]
    }
];

let currentReviewIndex = 0;

function showReview(index) {
    document.getElementById("review-text").innerText = reviews[index].text;
    document.querySelector(".reviewer-info h3").innerText = reviews[index].reviewer;
    document.querySelector(".reviewer-info p").innerText = reviews[index].title;
    document.querySelector(".reviewer-image").src = reviews[index].reviewerimage;
    document.querySelector(".large-image").src = reviews[index].image;

    // Update the stats
    const statsContainer = document.querySelectorAll(".stat");
    const reviewStats = reviews[index].stats;
    for (let i = 0; i < statsContainer.length; i++) {
        const stat = statsContainer[i];
        const gradientText = stat.querySelector(".gradient-text");
        const blackText = stat.querySelector(".black-text");
        if (reviewStats && reviewStats[i]) {
            gradientText.innerText = reviewStats[i].gradientText;
            blackText.innerText = reviewStats[i].blackText;
        } else {
            gradientText.innerText = "";
            blackText.innerText = "";
        }
    }
}

function showNextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    showReview(currentReviewIndex);
}

function showPrevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
    showReview(currentReviewIndex);
}

showReview(currentReviewIndex);