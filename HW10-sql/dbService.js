const mysql = require('mysql2');
const { resource } = require('./app');
require('dotenv').config()
let instance = null;

const db = mysql.createConnection({
    host: process.env.HOST,
    user: 'root',
    password: process.env.DB_PASS,
    database: process.env.DATABASE_NAME
  });
  
  db.connect((err) => {
    if(err) {
      console.error(err.message);
    }
    console.log('db');
  });

  class DbService {
    static getDbServiceInstance() {
      return instance ? instance: new DbService();
    }

    async getAllData(nameLike) {
      try {
        const response = await new Promise((resolve, reject) => {
          const query = "SELECT * FROM menu_item WHERE name LIKE ? AND delete_dt IS NULL";
          db.query(query, [
            nameLike ? `%${nameLike}%` : "%"
          ], (err, result) => {
            if(err) {
              reject(new Error(err.message));
            } 
            resolve(result);
          });
        })
        return response;
      } catch (error) {
          console.error(error);
      }
    }

    async getMaxPrice() {
      try {
        const response = await new Promise((resolve, reject) => {
          const query = "SELECT max(price) AS max_price FROM menu_item";
          db.query(query, (err, result) => {
            if(err) {
              reject(new Error(err.message));
            } 
            resolve(result);
          });
        })
        return response;
      } catch (error) {
          console.error(error);
      }
    }

    async insertData(menuItem) {
      try {
          const response = await new Promise((resolve, reject) => {
              const query = `INSERT INTO menu_item (
                name, 
                price, 
                description, 
                image
              ) VALUES (?,?,?,?)`;
              db.query(query, [
                menuItem.name, 
                menuItem.price, 
                menuItem.description, 
                menuItem.image
              ] , (err, result) => {
                  if (err) reject(new Error(err.message));
                  resolve(result);
              })
          });
          return response;
      } catch (error) {
          console.log(error);
      }
    }

    async deleteDataById(id) {
      try {
          id = parseInt(id, 10); 
          const response = await new Promise((resolve, reject) => {
              const query = "UPDATE menu_item SET delete_dt = now() WHERE id = ?";

              db.query(query, [id] , (err, result) => {
                  if (err) reject(new Error(err.message));
                  resolve(result.affectedRows);
              })
          });

          return response === 1 ? true : false;
      } catch (error) {
          console.error(error);
          return false;
      }
    }
  }

  module.exports = DbService;