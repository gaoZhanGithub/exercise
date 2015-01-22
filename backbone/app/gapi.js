define(['config'],function(){
    function ApiManager(){
        this.loadGapi();
    }
    _.extend(ApiManager.prototype,Backbone.Events);
    ApiManager.prototype.init=function(){
        var self=this;
        gapi.client.load('task','v1',function(){ });

        function handleClientLoad(){
            gapi.client.setApiKey(config.apikey);
            window.setTimeout(checkAuth,100);

        }
        function chekAuth(){
            gapi.auth.authorize({
                client_id:config.clientId,
                scope:config.scopes,
                immediate:true
            },handleAuthResult);
        }
        function handleAuthResult(authResult){}

        handleClientLoad();
    }
    ApiManager.prototype.loadGapi=function(){
        var self=this;
        if(typeof gapi !== 'undefined'){
            return this.init();
        }
        require('https://apis.google.com/js/client.js?onload=define',function(){
            function checkGAPI(){
                if(gapi && gapi.client){
                    self.init();
                }else{
                    setTimeout(checkGAPI,100);
                }
            }
            checkGAPI();
        });
    }
    Backbone.sync=function(method,model,options){
        options||(options={});
        switch (method){
            case 'create':
                break;
            case 'update':
                break;
            case 'delete':
                break;
            case 'read':
                break;

        }
    }
    return ApiManager;
});
