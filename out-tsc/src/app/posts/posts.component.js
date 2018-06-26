"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var bad_input_1 = require("./../common/bad-input");
var not_found_error_1 = require("./../common/not-found-error");
var posts_service_1 = require("./../sevices/posts.service");
var core_1 = require("@angular/core");
var PostsComponent = /** @class */ (function () {
    function PostsComponent(service) {
        this.service = service;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    PostsComponent.prototype.createPost = function (input) {
        var _this = this;
        var post = { title: input.value };
        this.posts.splice(0, 0, post);
        input.value = '';
        this.service.create(post)
            .subscribe(function (newPost) {
            post['id'] = newPost.id;
        }, function (error) {
            _this.posts.splice(0, 1);
            if (error instanceof bad_input_1.BadInput) {
                // this.form.setErrors(error.originalError);
            }
            else {
                throw error;
            }
        });
    };
    PostsComponent.prototype.updatePost = function (post) {
        this.service.update(post)
            .subscribe(function (updatedPost) { return console.log(updatedPost); });
    };
    PostsComponent.prototype.deletePost = function (post) {
        var _this = this;
        var index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.delete(post)
            .subscribe(null, function (error) {
            _this.posts.splice(index, 0, post);
            if (error instanceof not_found_error_1.NotFoundError) {
                alert('The post has been deleted already.');
            }
            else {
                throw error;
            }
        });
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.css']
        }),
        __metadata("design:paramtypes", [posts_service_1.PostsService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map