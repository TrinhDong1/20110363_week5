// public/js/main.js
$(document).ready(function () {
    // Xóa bài viết
    $('.delete-post').click(function (e) {
        e.preventDefault();
        const postId = $(this).data('id');
        $.post(`/delete/${postId}`, function () {
            // Xóa thành công, cập nhật trang
            window.location.reload();
        });
    });
});
