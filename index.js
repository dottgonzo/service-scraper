"use strict";
var scrape = (function () {
    function scrape(url) {
        var base_params;
        if (url.split('//').length < 2) {
            throw Error('please give a valid url');
        }
        else {
            var uid = void 0;
            var provider = url.split('//')[1].split('/')[0];
            var query = url.split(provider)[1];
            switch (provider) {
                case "facebook.com":
                    throw Error('todo');
                case "www.youtube.com":
                    uid = query.split('v=')[1].split('&')[0];
                    base_params = {
                        uid: uid,
                        provider: 'youtube',
                        img: 'http://img.youtube.com/vi/' + uid + '/default.jpg',
                        hqimg: 'http://img.youtube.com/vi/' + uid + '/hqdefault.jpg',
                        mqimg: 'http://img.youtube.com/vi/' + uid + '/mqdefault.jpg',
                        sdimg: 'http://img.youtube.com/vi/' + uid + '/sddefault.jpg',
                        maximg: 'http://img.youtube.com/vi/' + uid + '/maxresdefault.jpg',
                        url: url
                    };
                    break;
                case "youtube.com":
                    uid = query.split('v=')[1].split('&')[0];
                    base_params = {
                        uid: uid,
                        provider: 'youtube',
                        img: 'http://img.youtube.com/vi/' + uid + '/default.jpg',
                        hqimg: 'http://img.youtube.com/vi/' + uid + '/hqdefault.jpg',
                        mqimg: 'http://img.youtube.com/vi/' + uid + '/mqdefault.jpg',
                        sdimg: 'http://img.youtube.com/vi/' + uid + '/sddefault.jpg',
                        maximg: 'http://img.youtube.com/vi/' + uid + '/maxresdefault.jpg',
                        url: url
                    };
                    break;
                default:
                    throw Error('provider is not supported');
            }
        }
        this.base_params = base_params;
    }
    return scrape;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = scrape;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQTtJQUVJLGdCQUFZLEdBQVc7UUFDbkIsSUFBSSxXQUFnQixDQUFDO1FBRXJCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQTtRQUMxQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFJSixJQUFJLEdBQUcsU0FBUSxDQUFDO1lBRWhCLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRWpELElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFHcEMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFHZixLQUFLLGNBQWM7b0JBRWYsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBRXZCLEtBQUssaUJBQWlCO29CQUNsQixHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBRXhDLFdBQVcsR0FBRzt3QkFDVixHQUFHLEVBQUUsR0FBRzt3QkFDUixRQUFRLEVBQUUsU0FBUzt3QkFDbkIsR0FBRyxFQUFFLDRCQUE0QixHQUFHLEdBQUcsR0FBRyxjQUFjO3dCQUN4RCxLQUFLLEVBQUUsNEJBQTRCLEdBQUcsR0FBRyxHQUFHLGdCQUFnQjt3QkFDNUQsS0FBSyxFQUFFLDRCQUE0QixHQUFHLEdBQUcsR0FBRyxnQkFBZ0I7d0JBQzVELEtBQUssRUFBRSw0QkFBNEIsR0FBRyxHQUFHLEdBQUcsZ0JBQWdCO3dCQUM1RCxNQUFNLEVBQUUsNEJBQTRCLEdBQUcsR0FBRyxHQUFHLG9CQUFvQjt3QkFDakUsR0FBRyxFQUFDLEdBQUc7cUJBRVYsQ0FBQTtvQkFFRCxLQUFLLENBQUM7Z0JBR1YsS0FBSyxhQUFhO29CQUVkLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFFeEMsV0FBVyxHQUFHO3dCQUNWLEdBQUcsRUFBRSxHQUFHO3dCQUNSLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixHQUFHLEVBQUUsNEJBQTRCLEdBQUcsR0FBRyxHQUFHLGNBQWM7d0JBQ3hELEtBQUssRUFBRSw0QkFBNEIsR0FBRyxHQUFHLEdBQUcsZ0JBQWdCO3dCQUM1RCxLQUFLLEVBQUUsNEJBQTRCLEdBQUcsR0FBRyxHQUFHLGdCQUFnQjt3QkFDNUQsS0FBSyxFQUFFLDRCQUE0QixHQUFHLEdBQUcsR0FBRyxnQkFBZ0I7d0JBQzVELE1BQU0sRUFBRSw0QkFBNEIsR0FBRyxHQUFHLEdBQUcsb0JBQW9CO3dCQUNqRSxHQUFHLEVBQUMsR0FBRztxQkFFVixDQUFBO29CQUNELEtBQUssQ0FBQztnQkFFVjtvQkFFSSxNQUFNLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1lBRWhELENBQUM7UUFJTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7SUFFbEMsQ0FBQztJQUdMLGFBQUM7QUFBRCxDQTFFQSxBQTBFQyxJQUFBO0FBMUVEO3dCQTBFQyxDQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUHJvbWlzZSBmcm9tIFwiYmx1ZWJpcmRcIlxuXG5pbnRlcmZhY2UgSVNjcmFwZSB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2NyYXBlIHtcbiAgICBiYXNlX3BhcmFtczogYW55O1xuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBiYXNlX3BhcmFtczogYW55O1xuXG4gICAgICAgIGlmICh1cmwuc3BsaXQoJy8vJykubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BsZWFzZSBnaXZlIGEgdmFsaWQgdXJsJylcbiAgICAgICAgfSBlbHNlIHtcblxuXG5cbiAgICAgICAgICAgIGxldCB1aWQ6IHN0cmluZztcblxuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSB1cmwuc3BsaXQoJy8vJylbMV0uc3BsaXQoJy8nKVswXVxuXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IHVybC5zcGxpdChwcm92aWRlcilbMV1cblxuXG4gICAgICAgICAgICBzd2l0Y2ggKHByb3ZpZGVyKSB7XG5cblxuICAgICAgICAgICAgICAgIGNhc2UgXCJmYWNlYm9vay5jb21cIjpcblxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigndG9kbycpXG5cbiAgICAgICAgICAgICAgICBjYXNlIFwid3d3LnlvdXR1YmUuY29tXCI6XG4gICAgICAgICAgICAgICAgICAgIHVpZCA9IHF1ZXJ5LnNwbGl0KCd2PScpWzFdLnNwbGl0KCcmJylbMF1cblxuICAgICAgICAgICAgICAgICAgICBiYXNlX3BhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogdWlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6ICd5b3V0dWJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzogJ2h0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHVpZCArICcvZGVmYXVsdC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHFpbWc6ICdodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB1aWQgKyAnL2hxZGVmYXVsdC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXFpbWc6ICdodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB1aWQgKyAnL21xZGVmYXVsdC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2RpbWc6ICdodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB1aWQgKyAnL3NkZGVmYXVsdC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW1nOiAnaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdWlkICsgJy9tYXhyZXNkZWZhdWx0LmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6dXJsXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cbiAgICAgICAgICAgICAgICBjYXNlIFwieW91dHViZS5jb21cIjpcblxuICAgICAgICAgICAgICAgICAgICB1aWQgPSBxdWVyeS5zcGxpdCgndj0nKVsxXS5zcGxpdCgnJicpWzBdXG5cbiAgICAgICAgICAgICAgICAgICAgYmFzZV9wYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiAneW91dHViZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc6ICdodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyB1aWQgKyAnL2RlZmF1bHQuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhxaW1nOiAnaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdWlkICsgJy9ocWRlZmF1bHQuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1xaW1nOiAnaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdWlkICsgJy9tcWRlZmF1bHQuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkaW1nOiAnaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgdWlkICsgJy9zZGRlZmF1bHQuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltZzogJ2h0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJyArIHVpZCArICcvbWF4cmVzZGVmYXVsdC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOnVybFxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdwcm92aWRlciBpcyBub3Qgc3VwcG9ydGVkJylcblxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFzZV9wYXJhbXMgPSBiYXNlX3BhcmFtc1xuXG4gICAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
