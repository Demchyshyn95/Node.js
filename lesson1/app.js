const fs = require('fs');
const path = require('path');
const path1800 = path.join(process.cwd(), '1800');
const path2000 = path.join(process.cwd(), '2000');

const renameDir = async (dir) => {
    switch (dir) {
        case path2000: {
            fs.readdir(path2000, (err, files) => {
                if (err) {
                    console.log(err);
                    return;
                }
                files.forEach(file =>
                    fs.rename(path.join(path2000, file), path.join(path1800, file), err => console.log(err))
                )
            })
            break;
        }
        case path1800: {
            fs.readdir(path1800, (err, files) => {
                if (err) {
                    console.log(err);
                    return;
                }
                files.forEach(file =>
                    fs.rename(path.join(path1800, file), path.join(path2000, file), err => console.log(err))
                )
            })
            break;
        }
        default:
            return;
    }
}
renameDir(path1800);
renameDir(path2000);
