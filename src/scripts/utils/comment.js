const commentsContainer = document.getElementById('comments-container');

const customerReviews = [
  {
    'name': 'Ahmad',
    'review': 'Tidak rekomendasi untuk pelajar!',
    'date': '13 November 2019'
  },
  {
    'name': 'Dewi',
    'review': 'Sangat membantu dan berkualitas!',
    'date': '2 Januari 2021'
  },
  {
    'name': 'Rizki',
    'review': 'Harga terlalu mahal untuk fasilitas yang ditawarkan.',
    'date': '7 Mei 2022'
  }
];


function displayComments(reviews) {
  commentsContainer.innerHTML = '';
  reviews.forEach((review) => {
    const commentCard = document.createElement('div');
    commentCard.className = 'comment-card';

    commentCard.innerHTML = `
            <div class="name">${review.name}</div>
            <div class="date">${review.date}</div>
            <div class="review">${review.review}</div>
        `;
    commentsContainer.appendChild(commentCard);
  });
}

displayComments(customerReviews);
