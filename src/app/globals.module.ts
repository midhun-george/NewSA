import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    //API  URL
    serviceUrl: string = 'https://xcalibur.agilityclouds.com:8080/AirTMDService.svc';

    //Home Page Social Media URL
    readonly Facebook: string = 'https://www.facebook.com/dreamseekerlab/';
    readonly Instagram: string = 'https://www.instagram.com/dreamseekerlab/';
    readonly Youtube: string = 'https://www.youtube.com/channel/UCzD3d5A-IVRoGxN4RrUT55A/videos';
    readonly Pinterest: string = ' https://www.pinterest.com/dreamseekerlab/';
    readonly Twitter: string = 'https://twitter.com/dreamseekerlab';

    //Logged User Information
    displayName: string;
    userDetails: any;
    isSignedIn: boolean;
    showLoader = false;
    screenSize: string;
    Context: any;
    ContextID: any;

    //Captch Key, Used in Registration Page
    readonly captchaKey: string = '6Ld4lDQUAAAAAEC8dW0qEu2plEjrJig6YovOaadg'; //XCALIBUR DOMAIN
    //readonly captchaKey: string = '6LdKlDQUAAAAAC7l-YVW71f8FlBkdgQMIlBJf2w8'; //LOCALHOST

    //eForm Process Names
    eFormConfiguration = {
        editPartner: {
            processName: 'Partner Registration',
            processTitle: 'Partner Registration'
        },
        addeditEquipment: {
            processName: 'Equipment Information',
            processTitle: 'Equipment Information'
        },
        addeditService: {
            processName: 'Service Information',
            processTitle: 'Service Information'
        },
        bankInformation: {
            processName: 'Bank Information',
            processTitle: 'Bank Information'
        },
        becomePartner: {
            processName: 'Partner Registration',
            processTitle: 'Partner Registration'
        },
        quotationRequest: {
            processName: 'Quotation Request',
            processTitle: 'Quotation Request'
        }
    }

    //Social Media Login Values
    readonly providers = {
        "google": {
            "clientId": "574334429062-tae7sucmt5eul0l45k7bell2iu96pkl2.apps.googleusercontent.com" //XCALIBUR DOMAIN
            //"clientId": "247120740744-kt07bjuo1cablsvg6kffao5hcqfmtjl6.apps.googleusercontent.com" //LOCALHOST
        },
        "linkedin": {
            "clientId": "86z3oun5v1jgt0"
        },
        "facebook": {
            "clientId": "426735311056893",//public
            "apiVersion": "v2.10" //like v2.4 
        }
    };

    setContextDetails(contextID, context) {
        this.Context = context;
        this.ContextID = contextID;
    }
}
