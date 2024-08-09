function buscarPosts() {
    var url = "https://jsonplaceholder.typicode.com/posts";

    var tablebody = document.querySelector("#tablebody");

    fetch(`${url}`)
        .then((response) => response.json())
        .then((data) => {
            console.log("Mensagem:");
            console.log(data);

            data.forEach(post => {
                tablebody.innerHTML += '<tr><td>' + post.userId + '</td><td>' + post.id + '</td><td>' + post.title + '</td><td>' + post.body + '</td></tr>';
            });
        }).catch((error) => {
            console.error("Erro na requisição " + error)
        });
}
