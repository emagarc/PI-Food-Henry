/* eslint-disable import/no-extraneous-dependencies */
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);

const recipe = {
  name: 'Milanea a la napolitana',
  sumamry: 'resumen del plato',
};

describe("Recipe routes", () => {

    describe("GET /recipes", () => {
        it("should get 200", () => agent.get("/recipes").expect(200)).timeout(
            40000
        );
    
    });

    describe("GET /recipes/:id", () => {
        it("should get 200", (done) => {
            agent.get("/recipes/794538").expect(200);
            done();
        });
        it("should res with 400 if the recipes is not found.", (done) => {
            agent.get("/recipes/impossibleToExist").expect(400);
            done();
        });
    });

    describe("POST /recipes", () => {
        it("should create a new recipe", (done) => {
            agent.post("/recipes").send(recipe).expect(200);
            done();
        });
    });
});