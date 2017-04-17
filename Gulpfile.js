var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('default', gulp.series(['ts',function() {
    gulp.watch('src/**/*.ts', gulp.series(['ts']));
}]));