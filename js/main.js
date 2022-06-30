/*
→fazer a lógica do cpf = conferir se retorna true para válido 
→ fazer calculo de válidação 
→ conferir o segundo numero 

*/

function recebeCpf() {
  let cpf = '792.168.212-05'
  let cpfLimpo = cpf.replace(/\D+/g, '')
  cpfArray = Array.from(cpfLimpo)
  validaDig1(cpfArray)
}

function validaDig1(cpf) {
  let controle = 10
  const confereCpf = cpf.slice(0, 9).reduce((acumulador, valor) => {
    let i = valor * controle
    controle--
    return (acumulador += i)
  }, 0)
  let check = 11 - Math.ceil(confereCpf % 11)
  if (check > 9) {
    check = 0
  }
  return check === parseInt(cpf[9])
    ? validaDig2(cpf)
    : console.log('Cpf inválido')
}

function validaDig2(cpf) {
  let controle = 11
  const confereCpf = cpf.slice(0, 10).reduce((acumulador, valor) => {
    let i = valor * controle
    controle--
    return (acumulador += i)
  }, 0)
  let check = 11 - Math.ceil(confereCpf % 11)
  if (check > 9) {
    check = 0
  }
  return check === parseInt(cpf[10])
    ? console.log('Cpf válido')
    : console.log('Cpf inválido')
}
recebeCpf()
