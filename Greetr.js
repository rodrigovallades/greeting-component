(function(global, $) {
        
    global = global.document !== undefined ? window : this;    
    
    // Returns a new Constructor
    var Greetr = function(firstName, lastName, message, language) {        
        return new Greetr.init(firstName, lastName, message, language);
    };
    
    var supportedLanguages = ['br','en'];
    
    var messages = {
        br: 'Oi',
        en: 'Hi'
    };
    
    var formalMessages = {
        br: 'Olá',
        en: 'Greetings'
    };
    
    var logMessages = {
        br: 'Usuário logado:',
        en: 'User logged in:'
    };
        
    // Constructor
    Greetr.init = function(firstName, lastName, message, language) {
        this.firstName = firstName || '',
        this.lastName = lastName || '',
        this.message = message || '',
        this.language = language || 'en'
    }
    
    // Methods
    Greetr.prototype = {        
        fullname: function() {
            return this.firstName + ' ' + this.lastName;
        },
        validateLanguage: function(language) {
            var validate = supportedLanguages.indexOf(language) !== -1;
            if (!validate && console) {
                console.error('Invalid language');
            }
            return validate;
        },
        greeting: function() {
            return messages[this.language] + ', ' + this.firstName;
        },
        formalGreeting: function() {
            return formalMessages[this.language] + ', ' + this.fullname();
        },
        greet: function(formal) {
            var msg = formal ? this.formalGreeting() : this.greeting();
            if (console) {
                console.log(msg);
            }
            return this;
        },
        log: function() {
            logMessage = logMessages[this.language] + ' ' + this.fullname();
            if (console) {
                console.log(logMessage);
            }
            return this;
        },
        setLanguage: function(language) {
            if (this.validateLanguage(language)) {
                this.language = language;    
            }
            return this;
        },
        showDomMessage: function(element) {            
            $(element).text(this.formalGreeting());
            
            return this;
        }
    };
    
    // Reference exposed prototype to the internal methods
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;    
    
}(this, jQuery));