programa {
  funcao inicio()
  {
    inteiro base, expoente, resp = 1
    inteiro i

    // Solicita a base e o expoente
    escreva("Digite a base (1): ")
    leia(base)
    escreva("Digite o expoente (¹): ")
    leia(expoente)

    // Faz o calculo e armazena o resultado
    para (i = 1; i <= expoente; i += 1)
    {
      resp = resp * base
    }

    // Exibe a notação e o resultado ao usuário
    escreva("\n", base, "^", expoente, " = ", resp)
  }
}
