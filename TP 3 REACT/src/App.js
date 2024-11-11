function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>
          Ingrese un texto:
          <input type="text" name="texto" />
        </p>
        <p>
          <input type="submit" value="Enviar" />
        </p>
      </form>
    </div>
  );
}

function presion(e) {
  e.preventDefault();
  const texto = e.target.texto.value;
  alert('El texto que ingresó tiene: ' + vocales(texto) + ' vocales');
}

function vocales(texto) {
  const vocales = 'aeiouAEIOU';
  let contVocales = 0;
  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contVocales++;
    }
  }
  return contVocales;
}

export default App;