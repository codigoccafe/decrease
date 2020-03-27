
const GoogleAnalytcs = {
    sair : function(){
        gtag('event', 'close_site', {
            'name': 'close',
            'value': 'Usuário saiu do site',
            'event_category': 'fechou_site'
        });
    },
    tempo_acesso : function (segundos){
        setInterval(function(){ 
            gtag('event', 'time_on', {
              'name': 'time',
              'value': 'tempo on no site',
              'event_category': 'tempo_acesso_site'
            });
          }, segundos);
    }
}

const GA_sair = GoogleAnalytcs['sair'];
const GA_time = GoogleAnalytcs['tempo_acesso'];



GA_sair();
GA_time(30000);

 