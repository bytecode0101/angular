(function () {
    var contactService = function () {
        var contactForm = 
            {
                nume: 'gaga',
                prenume: '',
                tel: '',
                email: ''
            };

        this.getContactForm = function () {
            return contactForm;
        };

        this.setContactForm = function (formData) {
            //aplez serviciu care scrie in DB
        };
    };

    angular.module('customersApp').service('contactService', contactService);

}());