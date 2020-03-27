 
# Decrease taxa de rejeição Google Analytics

Este é um código que usa a API do Google Analytics para reduzir a taxa de rejeição de um site. 

Você tem que usar aquele script de acompanhamento fornecido pelo Analytics para o Decrease funcionar.

```
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-149347508-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-149347508-1');
</script>
```

## Instalar

Você deve integrar o arquivo decrease.min.js antes da tag </body>.
```
<script src="decrease.min.js"></script>
```
## Uso

- GA_sair identifica quando o usuário sai do site e registra o evento no Google Analytics
- GA_time A cada 30 segundos um novo evento de tempo de permanência no site é registrado no Google Analytics

```
GA_sair();
GA_time(30000);
```

## Resultados

Em meus testes eu diminui a taxa de rejeição de um site de 79% para 8% 

## Como funciona os eventos do Google Analytics

O Google Analytics resgistra um evento quando o usuário entra no site e só resgistra outro evento quando o usuário sai para outra página. 

Sendo assim se o usuário ler um artigo de 5 minutos e fechar a página sem navegar no site o segundo evento não é registrado. O que acaba sendo registrado no Google Analytics é o tempo de permanencia na página de 00:00:00. 

Percebe que mesmo com 5 minutos de leitura na página você ainda recebe 00:00:00 e esse tempo que faz com que a maioria dos sites registre taxas de rejeições tão alta.

Logicamente que esse script não vai salvar seu site se o usuário entrar e sair rapidamente do site. Mas para os sites que tem postagens de longa leitura é uma opção para reduzir a taxa de rejeição.
