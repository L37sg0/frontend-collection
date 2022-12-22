$(function () {
    var win             = $(window),
        page            = $("html,body"),
        wrapper         = page.find("div.wrapper"),
        article         = page.find("article"),
        fixedEl         = page.find("aside"),
        sections        = page.find("section"),
        initialPos      = fixedEl.offset(),
        width           = fixedEl.width(),
        percentWidth    = 100 * width / wrapper.width();

    win.one("scroll", function () {
       fixedEl.css({
           width: width,
           position: "fixed",
           top: Math.round(initialPos.top),
           left: Math.round(initialPos.left)
       });
    });
});