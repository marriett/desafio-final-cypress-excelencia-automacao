import { faker } from "@faker-js/faker"

export default {
    createUser: function() {
        let dados = {
            "firstName": faker.person.firstName(),
            "lastName": faker.person.lastName(),
            "email": faker.internet.email(),
            "phone": faker.phone.number().replace(/[^\d]/g, ''),
            "country": Math.floor(Math.random() * (120 - 1)),
            "city": faker.location.city(),
            "message": faker.lorem.paragraph(),
            "code": faker.word.words()
        }

        return dados
    }
}