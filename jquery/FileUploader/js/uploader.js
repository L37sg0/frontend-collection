;(function ($) {
    var defaults    = {
        strings: {
            title: "Up - A jQuery uploader",
            dropText: "Drag files here",
            altText: "Or select using the button",
            buttons: {
                choose: "Choose files",
                upload: "Upload files"
            },
            tableHeadings: [
                "Type", "Name", "Size", "Remove all x"
            ]
        }
    }

    function Up(el, opts) {
        this.config = $.extend(true, {}, defaults, opts);
        this.el     = el;
        this.fileList   = [];
        this.allXHR     = [];
    }

    Up.prototype.init = function () {
        var widget  = this,
            strings = widget.config.strings,
            container   = $("<article/>", {
                "class": "up"
            }),
            heading     = $("<header/>").appendTo(container),
            title       = $("<h1/>", {
                text: strings.title
            }).appendTo(heading),
            drop        = $("<div/>", {
                "class": "up-drop-target",
                html: $("<h2/>", {
                    text: strings.dropText
                })
            }).appendTo(container),
            alt         = $("<h3/>", {
                text: strings.altText
            }).appendTo(container),
            upload      = $("<input/>", {
                type: "file"
            }).prop("multiple", true).appendTo(container),
            select      = $("<a/>", {
                href: "#",
                "class": "ui-button up-choose",
                text: strings.buttons.choose
            }).appendTo(container),
            selected    = $("<div/>", {
                "class": "up-selected"
            }).appendTo(container),
            upload      = $("<a/>", {
                href: "#",
                "class": "ui-button up-upload",
                text: strings.buttons.upload
            }).appendTo(container);

        widget.el.append(container);

        widget.el.on("click", "a.up-choose", function (e) {
            e.preventDefault();

            widget.el.find("input [type='file']").click();
        });

        widget.el.on("drop change dragover", "article.up", function (e) {
            if (e.type === "dragover") {
                e.preventDefault();
                e.stopPropagation();
                return false;
            } else if (e.type === "drop") {
                e.preventDefault();
                e.stopPropagation();
                widget.files = e.originalEvent.dataTransfer.files;
            } else {
                widget.files = widget.el
                    .find("input[type='file']")[0]
                    .files;
            }

            widget.handleFiles();
        });
    }

    $.fn.up = function (options) {
        new Up(this, options).init();
        return this;
    };
}(jQuery));