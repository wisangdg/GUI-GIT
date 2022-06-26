fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
    return data.json();
}).then((objectData) => {
    console.log(objectData);
    let tableData = `<thead>
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Address</th>
    </tr>
</thead>`;
    objectData.map((values) => {
        console.log(values);
        tableData += ` <tr>
                    <td>${values.name}</td>
                    <td>${values.username}</td>
                    <td>${values.email}</td>
                    <td>${values.address.city}, ${values.address.suite}, ${values.address.street}</td>
                    <td>${values.company.name}</td>
                </tr>`;
    });
    console.log(tableData);
    document.getElementById("table").innerHTML = tableData;
});