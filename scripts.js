document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.querySelector('.comment-form');
    const commentList = document.querySelector('.comment-list');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = commentForm.name.value.trim();
        const comment = commentForm.comment.value.trim();

        if (name && comment) {
            const newComment = document.createElement('p');
            newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
            commentList.appendChild(newComment);
            commentForm.reset();
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    });
});
