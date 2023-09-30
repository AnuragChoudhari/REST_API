

function fetchData(){
    async function getData () {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        return data;
    }
    console.log(data);
}

export default fetchData();
