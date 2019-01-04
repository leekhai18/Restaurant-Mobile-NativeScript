"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getItems = function () {
        return [{
                id: 1,
                name: "Manila Ultimate Tombstone Burger",
                cover: "~/assets/images/food/burger640.jpg",
                images: [
                    "~/assets/images/food/burger/burger1.jpg",
                    "~/assets/images/food/burger/burger2.jpg",
                    "~/assets/images/food/burger/burger3.jpg",
                    "~/assets/images/food/burger/burger4.jpg",
                    "~/assets/images/food/burger/burger5.jpg",
                    "~/assets/images/food/burger/burger6.jpg"
                ],
                category: "Burger",
                categoryTag: "#2D9CDB",
                price: "300.00",
                likes: 987,
                isLike: false,
                isFavorite: true,
                comments: 13,
                rating: "4.5",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!\n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!"
            },
            {
                id: 2,
                name: "Quezon Chocolate Marble Pancake",
                cover: "~/assets/images/food/pancake640.jpg",
                images: [
                    "~/assets/images/food/pancake/pancake1.jpg",
                    "~/assets/images/food/pancake/pancake2.jpg",
                    "~/assets/images/food/pancake/pancake3.jpg",
                    "~/assets/images/food/pancake/pancake4.jpg",
                    "~/assets/images/food/pancake/pancake5.jpg",
                    "~/assets/images/food/pancake/pancake6.jpg"
                ],
                category: "Pancake",
                categoryTag: "#e4ce0d",
                price: "230.00",
                likes: 891,
                isLike: true,
                isFavorite: true,
                comments: 7,
                rating: "4.0",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!\n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!"
            },
            {
                id: 3,
                name: "Binondo Black Forest Cake",
                cover: "~/assets/images/food/cake640.jpg",
                images: [
                    "~/assets/images/food/cake/cake1.jpg",
                    "~/assets/images/food/cake/cake2.jpg",
                    "~/assets/images/food/cake/cake3.jpg",
                    "~/assets/images/food/cake/cake4.jpg"
                ],
                category: "Cake",
                categoryTag: "#27AE60",
                price: "300.00",
                likes: 730,
                isLike: true,
                isFavorite: true,
                comments: 11,
                rating: "4.0",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!\n\t\t\t\t\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n\t\t\t\t\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!"
            }];
    };
    DataService.prototype.getCategories = function () {
        return [
            {
                cover: "~/assets/images/food/burger640.jpg",
                category: "BURGER",
                count: "13",
            },
            {
                cover: "~/assets/images/food/pancake640.jpg",
                category: "PANCAKE",
                count: "5",
            },
            {
                cover: "~/assets/images/food/cake640.jpg",
                category: "CAKE",
                count: "9",
            },
            {
                cover: "~/assets/images/food/beer640.jpg",
                category: "BEER",
                count: "7",
            }
        ];
    };
    DataService = __decorate([
        core_1.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFNM0M7SUFBQTtJQXdHQSxDQUFDO0lBdkdHLDhCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUM7Z0JBQ0osRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLGtDQUFrQztnQkFDeEMsS0FBSyxFQUFFLG9DQUFvQztnQkFDM0MsTUFBTSxFQUFFO29CQUNKLHlDQUF5QztvQkFDekMseUNBQXlDO29CQUN6Qyx5Q0FBeUM7b0JBQ3pDLHlDQUF5QztvQkFDekMseUNBQXlDO29CQUN6Qyx5Q0FBeUM7aUJBQzVDO2dCQUNELFFBQVEsRUFBRSxRQUFRO2dCQUNsQixXQUFXLEVBQUUsU0FBUztnQkFDdEIsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRSxLQUFLO2dCQUNiLFdBQVcsRUFBRSxvakNBSTRIO2FBQzVJO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLGlDQUFpQztnQkFDdkMsS0FBSyxFQUFFLHFDQUFxQztnQkFDNUMsTUFBTSxFQUFFO29CQUNKLDJDQUEyQztvQkFDM0MsMkNBQTJDO29CQUMzQywyQ0FBMkM7b0JBQzNDLDJDQUEyQztvQkFDM0MsMkNBQTJDO29CQUMzQywyQ0FBMkM7aUJBQzlDO2dCQUNELFFBQVEsRUFBRSxTQUFTO2dCQUNuQixXQUFXLEVBQUUsU0FBUztnQkFDdEIsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE1BQU0sRUFBRSxLQUFLO2dCQUNiLFdBQVcsRUFBRSxvakNBSTRIO2FBQzVJO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLDJCQUEyQjtnQkFDakMsS0FBSyxFQUFFLGtDQUFrQztnQkFDekMsTUFBTSxFQUFFO29CQUNKLHFDQUFxQztvQkFDckMscUNBQXFDO29CQUNyQyxxQ0FBcUM7b0JBQ3JDLHFDQUFxQztpQkFDeEM7Z0JBQ0QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFdBQVcsRUFBRSxTQUFTO2dCQUN0QixLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsR0FBRztnQkFDVixNQUFNLEVBQUUsSUFBSTtnQkFDWixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsV0FBVyxFQUFFLG9qQ0FJNEg7YUFDNUksQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxPQUFPO1lBQ0g7Z0JBQ0ksS0FBSyxFQUFFLG9DQUFvQztnQkFDM0MsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxJQUFJO2FBQ2Q7WUFDRDtnQkFDSSxLQUFLLEVBQUUscUNBQXFDO2dCQUM1QyxRQUFRLEVBQUUsU0FBUztnQkFDbkIsS0FBSyxFQUFFLEdBQUc7YUFDYjtZQUNEO2dCQUNJLEtBQUssRUFBRSxrQ0FBa0M7Z0JBQ3pDLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixLQUFLLEVBQUUsR0FBRzthQUNiO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLGtDQUFrQztnQkFDekMsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLEtBQUssRUFBRSxHQUFHO2FBQ2I7U0FDSixDQUFDO0lBQ04sQ0FBQztJQXZHUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBd0d2QjtJQUFELGtCQUFDO0NBQUEsQUF4R0QsSUF3R0M7QUF4R1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi4vZGF0YS9pdGVtLm1vZGVsXCI7XHJcbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSBcIi4uL2RhdGEvY2F0ZWdvcnkubW9kZWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcclxuICAgIGdldEl0ZW1zKCk6IEFycmF5PEl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiTWFuaWxhIFVsdGltYXRlIFRvbWJzdG9uZSBCdXJnZXJcIixcclxuICAgICAgICAgICAgY292ZXI6IFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyNjQwLmpwZ1wiLFxyXG4gICAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjEuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXIyLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyMy5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvYnVyZ2VyL2J1cmdlcjQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2J1cmdlci9idXJnZXI1LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXIvYnVyZ2VyNi5qcGdcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJCdXJnZXJcIixcclxuICAgICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiIzJEOUNEQlwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIzMDAuMDBcIixcclxuICAgICAgICAgICAgbGlrZXM6IDk4NyxcclxuICAgICAgICAgICAgaXNMaWtlOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29tbWVudHM6IDEzLFxyXG4gICAgICAgICAgICByYXRpbmc6IFwiNC41XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG5cdFx0XHRcdFxcblJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG5cdFx0XHRcdFxcbk5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSFcclxuXHRcdFx0XHRcXG5SYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuXHRcdFx0XHRcXG5OZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgbmFtZTogXCJRdWV6b24gQ2hvY29sYXRlIE1hcmJsZSBQYW5jYWtlXCIsXHJcbiAgICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICAgIGltYWdlczogW1xyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UxLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UyLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2UzLmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U0LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U1LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9wYW5jYWtlL3BhbmNha2U2LmpwZ1wiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlBhbmNha2VcIixcclxuICAgICAgICAgICAgY2F0ZWdvcnlUYWc6IFwiI2U0Y2UwZFwiLFxyXG4gICAgICAgICAgICBwcmljZTogXCIyMzAuMDBcIixcclxuICAgICAgICAgICAgbGlrZXM6IDg5MSxcclxuICAgICAgICAgICAgaXNMaWtlOiB0cnVlLFxyXG4gICAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb21tZW50czogNyxcclxuICAgICAgICAgICAgcmF0aW5nOiBcIjQuMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuXHRcdFx0XHRcXG5SYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuXHRcdFx0XHRcXG5OZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khXHJcblx0XHRcdFx0XFxuUmF0aW9uZSBtYWlvcmVzLCB2ZXJpdGF0aXMgbmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpISBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXHJcblx0XHRcdFx0XFxuTmVzY2l1bnQgc2ludCBkb2xvcnVtIHNlcXVpIGRpY3RhIG9tbmlzIGRvbG9yIGJsYW5kaXRpaXMsIGlwc2FtIG9mZmljaWlzIGNvbW1vZGkgdGVtcG9yaWJ1cyBxdWFzIG5vbiBub2JpcyB0ZW1wb3JlIHNhZXBlIG5lY2Vzc2l0YXRpYnVzIHF1YXNpIWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiQmlub25kbyBCbGFjayBGb3Jlc3QgQ2FrZVwiLFxyXG4gICAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9jYWtlNjQwLmpwZ1wiLFxyXG4gICAgICAgICAgICBpbWFnZXM6IFtcclxuICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMS5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMi5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlMy5qcGdcIixcclxuICAgICAgICAgICAgICAgIFwifi9hc3NldHMvaW1hZ2VzL2Zvb2QvY2FrZS9jYWtlNC5qcGdcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJDYWtlXCIsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5VGFnOiBcIiMyN0FFNjBcIixcclxuICAgICAgICAgICAgcHJpY2U6IFwiMzAwLjAwXCIsXHJcbiAgICAgICAgICAgIGxpa2VzOiA3MzAsXHJcbiAgICAgICAgICAgIGlzTGlrZTogdHJ1ZSxcclxuICAgICAgICAgICAgaXNGYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29tbWVudHM6IDExLFxyXG4gICAgICAgICAgICByYXRpbmc6IFwiNC4wXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG5cdFx0XHRcdFxcblJhdGlvbmUgbWFpb3JlcywgdmVyaXRhdGlzIG5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSEgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxyXG5cdFx0XHRcdFxcbk5lc2NpdW50IHNpbnQgZG9sb3J1bSBzZXF1aSBkaWN0YSBvbW5pcyBkb2xvciBibGFuZGl0aWlzLCBpcHNhbSBvZmZpY2lpcyBjb21tb2RpIHRlbXBvcmlidXMgcXVhcyBub24gbm9iaXMgdGVtcG9yZSBzYWVwZSBuZWNlc3NpdGF0aWJ1cyBxdWFzaSFcclxuXHRcdFx0XHRcXG5SYXRpb25lIG1haW9yZXMsIHZlcml0YXRpcyBuZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcclxuXHRcdFx0XHRcXG5OZXNjaXVudCBzaW50IGRvbG9ydW0gc2VxdWkgZGljdGEgb21uaXMgZG9sb3IgYmxhbmRpdGlpcywgaXBzYW0gb2ZmaWNpaXMgY29tbW9kaSB0ZW1wb3JpYnVzIHF1YXMgbm9uIG5vYmlzIHRlbXBvcmUgc2FlcGUgbmVjZXNzaXRhdGlidXMgcXVhc2khYFxyXG4gICAgICAgIH1dO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhdGVnb3JpZXMoKTogQXJyYXk8Q2F0ZWdvcnk+IHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3ZlcjogXCJ+L2Fzc2V0cy9pbWFnZXMvZm9vZC9idXJnZXI2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJCVVJHRVJcIixcclxuICAgICAgICAgICAgICAgIGNvdW50OiBcIjEzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL3BhbmNha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJQQU5DQUtFXCIsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogXCI1XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2Nha2U2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJDQUtFXCIsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogXCI5XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvdmVyOiBcIn4vYXNzZXRzL2ltYWdlcy9mb29kL2JlZXI2NDAuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJCRUVSXCIsXHJcbiAgICAgICAgICAgICAgICBjb3VudDogXCI3XCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59Il19