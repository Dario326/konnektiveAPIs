const axios = require("axios");
const konnektive = require("../config/konnektive");

module.exports = {
    importOrder: function(res, req) {
        req = req.body;
        axios.post(`https://api.konnektive.com/order/import/`, {
            loginId: konnektive.username,
            password: konnektive.password,
            orderId: req.orderId ? req.orderId : null,
            sessionId: req.sessionId ? req.sessionId : null,
            customerId: req.customerId ? req.customerId : null,
            firstName: req.firstName ? req.firstName : null,
            lastName: req.lastName ? req.lastName : null,
            companyName: req.companyName ? req.companyName : null,
            address1 : req.address1 ? req.address1: null,
            address2: req.address2 ? req.address2 : null,
            postalCode: req.postalCode ? req.postalCode : null,
            city: req.city ? req.city : null,
            state: req.state ? req.state : null ,
            country: req.country ? req.country : null,
            emailAddress : req.emailAddress ? req.emailAddress : null,
            phoneNumber: req.phoneNumber ? req.phoneNumber : null,
            billShipSame: req.billShipSame ? req.billShipSame : null,
            campaignId: req.campaignId ? req.campaignId : null,
            shipFirstName: req.shipFirstName && req.billShipSame !== 1 ? req.shipFirstName : null,
            shipLastName: req.shipLastName && req.billShipSame !== 1 ? req.shipLastName : null,
            shipAddress1: req.shipAddress1 && req.billShipSame !== 1 ? req.shipAddress1 : null,
            shipAddress2: req.shipAddress2 && req.billShipSame !== 1 ? req.shipAddress2 : null,
            shipCity: req.shipCity && req.billShipSame !== 1 ? req.shipCity : null,
            shipState: req.shipState && req.billShipSame !== 1 ? req.shipState : null,
            shipCountry: req.shipCountry && req.billShipSame !== 1 ? req.shipCountry : null,
            shipPostalCode: req.shipPostalCode && req.billShipSame !== 1 ? req.shipPostalCode : null,
            paySource: req.paySource ? req.paySource : null,
            cardNumber: req.cardNumber ? req.cardNumber : null,
            cardMonth: req.cardMonth ? req.cardMonth : null,
            cardYear: req.cardYear ? req.cardYear : null,
            cardSecurityCode: req.cardSecurityCode ? req.cardSecurityCode : null,
            //need to go back and make products dynamic
            product1_id: req.product ? req.product : null,
            product1_qty: req.product1_qty ? req.product_qty : null
        }).then((response)=> {
            if(response.result === "success") {
                res.status(200).json(response.message)
            }
            else {
                res.status(500).json(response.message)
            }
        });
    },
    importLead: function(res, req) {
        req = req.body;
        axios.post(`https://api.konnektive.com/lead/import/`, {
            loginId: konnektive.username,
            password: konnektive.password,
            orderId: req.orderId ? req.orderId : null,
            sessionId: req.sessionId ? req.sessionId : null,
            customerId: req.customerId ? req.customerId : null,
            firstName: req.firstName ? req.firstName : null,
            lastName: req.lastName ? req.lastName : null,
            companyName: req.companyName ? req.companyName : null,
            address1: req.address1 ? req.address1 : null,
            address2: req.address2 ? req.address2 : null,
            postalCode: req.postalCode ? req.postalCode : null,
            city: req.city ? req.city : null,
            state: req.state ? req.state : null,
            country: req.country ? req.country : null,
            emailAddress: req.emailAddress ? req.emailAddress : null,
            phoneNumber: req.phoneNumber ? req.phoneNumber : null,
            billShipSame: req.billShipSame ? req.billShipSame : null,
            campaignId: req.campaignId ? req.campaignId : null,
            shipFirstName: req.shipFirstName && req.billShipSame !== 1 ? req.shipFirstName : null,
            shipLastName: req.shipLastName && req.billShipSame !== 1 ? req.shipLastName : null,
            shipAddress1: req.shipAddress1 && req.billShipSame !== 1 ? req.shipAddress1 : null,
            shipAddress2: req.shipAddress2 && req.billShipSame !== 1 ? req.shipAddress2 : null,
            shipCity: req.shipCity && req.billShipSame !== 1 ? req.shipCity : null,
            shipState: req.shipState && req.billShipSame !== 1 ? req.shipState : null,
            shipCountry: req.shipCountry && req.billShipSame !== 1 ? req.shipCountry : null,
            shipPostalCode: req.shipPostalCode && req.billShipSame !== 1 ? req.shipPostalCode : null,
        }).then((response)=> {
            if(response.result === "success") {
                res.status(200).json(response.message)
            }
            else {
                res.status(500).json(response.message)
            }
        });
    },
    importClick: function(res, req) {
        axios.post("https://api.konnektive.com/landers/clicks/import/", {
            pageType: req.pageType ,
            ipAddress: req.ipAddress,
            userAgent: req.userAgent,
            campaignId: req.campaignId,
            requestUri: req.requestUri
        }).then((response)=> {
            if(response.result === "success") {
                res.status(200).json(response.message)
            }
            else {
                res.status(500).json(response.message)
            }
        });
    },
    importUpsell: function(res, req) {
        axios.post("https://api.konnektive.com/upsale/import/", {
            orderId: req.orderId,
            productId: req.productId,
            productQty: req.productQty
        }).then((response)=> {
            if(response.result === "success") {
                res.status(200).json(response.message)
            }
            else {
                res.status(500).json(response.message)
            }
        });

    }
}
