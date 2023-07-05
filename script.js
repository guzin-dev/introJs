function startTutorial() {
  introJs()
    .setOptions({
      steps: [
        {
          intro:
            "Bem-vindo ao tutorial passo a passo! Clique em Próximo para continuar.",
        },
        {
          element: "#register",
          intro: "Aqui é a área onde você irá registrar seu novo produto",
        },
        {
          element: "#registerInput",
          intro: "Para registrar um novo produto você precisa dar um nome",
        },
        {
          element: "#registerButton",
          intro: "Após dar um nome ao seu produto você pode apertar em registar",
        },
        {
          element: "#products",
          intro: "É aqui que irão aparecer seus produtos",
        },
      ],
    })
    .start();
}