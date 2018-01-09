


//获取gulp对象
var gulp=require("gulp");

//导入插件
var cssmin=require("gulp-minify-css");//css压缩和优化的插件
var babel = require("gulp-babel");//es6转es5
var uglify=require("gulp-uglify");//js压缩插件


//定义任务
gulp.task("cssTask",function(){
	gulp.src("css/dafeiji.css")//指定要处理的文件
		.pipe( cssmin() )//使用插件gulp-minify-css
		.pipe( gulp.dest("dest/css") );//处理完成后存放的目录
})

//压缩js的插件
gulp.task("jsTask",function(){
	gulp.src("js/*.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe( uglify() )
		.pipe( gulp.dest("dest/js") );
})

//默认任务
gulp.task("default",["cssTask","jsTask"]);
