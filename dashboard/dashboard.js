fetch('http://localhost:3000/api/produtos')
  .then(res => res.json())
  .then(data => {
    document.getElementById('dados').innerHTML = 
      `<h3>Produtos</h3><pre>${JSON.stringify(data, null, 2)}</pre>`;
  });

