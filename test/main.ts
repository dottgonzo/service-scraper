import scr from "../index"

import * as chai from "chai"

const expect=chai.expect

const url1='https://www.youtube.com/watch?v=KIv5SdiXtss'
const scr1=new scr('https://www.youtube.com/watch?v=KIv5SdiXtss')

describe("main test", function () {

    it("should return a valid object", function () {
            expect(scr1.base_params).to.be.ok;
            expect(scr1.base_params).to.be.an("Object");

            expect(scr1.base_params).to.have.property("url").that.eq(url1);
            expect(scr1.base_params).to.have.property("img").that.is.a('string');


    })

})