const {src, dest, series} = require('gulp');
const del = require('del');
const browsersync = require ('browser-sync').create();
const babel =require('gulp-babel');
const concat=require('gulp-concat');

const dev='build/dev/';
const prod='build/prod/';


//function 
function html(cb){
	src(`${dev}/*.html`).pipe(dest(prod));
	cb();
}

function js(cb){
	src(`${dev}/script/*.js`)
	.pipe(concat('spiel.js'))
	.pipe(dest(`${prod}/script/`));
	cb();
}

async function clean(cb){
	await del(prod);
	cb();
}
function server(cb){
	browsersync.init({
		notfiy: false,
		open: false,
		server:{
			baseDir: prod
		}
		
	})
	cb();
}

//exports
exports.default= series(clean, html, js, server); 