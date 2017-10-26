var SQLite = require('react-native-sqlite-storage')

class Sqlite {
    constructor() {
        this.db = null;
    }

    open() {
        let that = this;
        let promise = new Promise(function(resolve, reject) {
            
                        this.db = SQLite.openDatabase({name: 'my.db', location: 'default'}, 
                        function(db) {
                            //this.db = db; 
                            console.log("SQLite DB opened successfully..")
                            resolve(true);
                        }, function(err) {
                            console.log("Could not open SQLite DB ", err);
                            reject(err);
                        });
            
        });
            
        return promise;
    }

    close() {

    }

    executeSql(statement) {
        let promise = new Promise(function(resolve, reject) {
            db.transaction((tx) => {
                tx.executeSql(statement, [], (tx, results) => {
                });
            });
        });

        return promise;
    }
}
 
// export function open() {
//     let promise = new Promise(function(resolve, reject) {

//             SQLite.openDatabase({name: 'my.db', location: 'default'}, 
//             function() {
//                 console.log("SQLite DB opened successfully..")
//                 resolve(true);
//             }, function() {
//                 console.log("Could not open SQLite DB");
//                 reject(false);
//             });

//     })

//     return promise;
// }
/*
default: Library/LocalDatabase subdirectory - NOT visible to iTunes and NOT backed up by iCloud
Library: Library subdirectory - backed up by iCloud, NOT visible to iTunes
Documents: Documents subdirectory - visible to iTunes and backed up by iCloud
*/

export default new Sqlite();