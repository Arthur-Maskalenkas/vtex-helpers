function calcularIntervalo(data) {
  const linhas = data.trim().split('\n');
  let total = 0;
  
  for (let linha of linhas) {
    const [inicio, fim] = linha.split(' - ');
    const [inicioHoras, inicioMinutos] = inicio.split(':').map(Number);
    const [fimHoras, fimMinutos] = fim.split(':').map(Number);
    
    const inicioEmMinutos = inicioHoras * 60 + inicioMinutos;
    const fimEmMinutos = fimHoras * 60 + fimMinutos;
    
    const diferencaEmMinutos = fimEmMinutos - inicioEmMinutos;
    
    total += diferencaEmMinutos;
  }
  
  const horas = Math.floor(total / 60);
  const minutos = total % 60;
  
  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
}


1 - pegue todos os horarios do senior e some a quantidade de dias trabalhos x 8
2 - pegue todos os jobs em dezembro.md e some com a calcularintervalo