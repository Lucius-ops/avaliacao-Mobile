export type Correntista = {
  rendaAnual: number;
  idade: number;
  temClt: boolean;
  temDivida: boolean;
};

export type ResultadoCredito = {
  aprovado: boolean;
  percentual: number; // ex.: 0.25 = 25%
  valorMaximo: number;
  motivo: string;
};

export default class AnaliseCredito {
  static percentualPorIdade(idade: number): number {
    if (idade <= 24) return 0.25;
    if (idade <= 49) return 0.4;
    if (idade <= 64) return 0.3;
    return 0.15;
  }

  static avaliar(correntista: Correntista): ResultadoCredito {
    if (correntista.temDivida) {
      return {
        aprovado: false,
        percentual: 0,
        valorMaximo: 0,
        motivo: "Correntista possui dívidas.",
      };
    }

    let percentual = AnaliseCredito.percentualPorIdade(correntista.idade);
    if (!correntista.temClt) percentual = percentual / 2;

    return {
      aprovado: true,
      percentual,
      valorMaximo: correntista.rendaAnual * percentual,
      motivo: "",
    };
  }
}
