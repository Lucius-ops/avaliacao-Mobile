export function formatarReais(valor: number): string {
  const [inteiro, centavos] = valor.toFixed(2).split(".");
  const comPontos = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `R$ ${comPontos},${centavos}`;
}

// Máscara: o usuário digita só números e o campo vira "R$ 1.234,56"
export function mascararMoeda(texto: string): string {
  const digitos = texto.replace(/\D/g, "");
  if (!digitos) return "";
  return formatarReais(Number(digitos) / 100);
}

export function lerReais(texto: string): number {
  const digitos = texto.replace(/\D/g, "");
  return digitos ? Number(digitos) / 100 : 0;
}
