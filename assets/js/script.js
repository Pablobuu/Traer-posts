const traerPosts = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error(error);
  }
};

document.querySelector("button").addEventListener("click", async () => {
  const datos = await traerPosts();
  const contenedorDatos = document.querySelector("#post-data");
  let html = "";
  datos.forEach((post) => {
    html += `<ul>
                <li>
                    <h4>${post.title}</h4>
                    <p>${post.body}</p>
                </li> 
            </ul>`;
  });
  contenedorDatos.innerHTML = html;
});
