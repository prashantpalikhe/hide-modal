# What

Got too tired of ads, got myself the ad-blocker. Then the ad-blocker detecting modals started popping up everywhere.
 
So created this snippet that I save in the devTools with which I can easily get rid of those annoying modals.

# How

How the snippet works? When you run the snippet, it tries to find the modal element by checking the element that is present in the middle of the viewport and overlaps another element. 

It then also tries to find the modal backdrop element by checking for an element that spans the viewport dimension, overlaps other elements and does not have any children. 

If such elements exist, the snippet gets rid of them.
 
# Improvement

Modal detection strategy could be improved to cover wider range of modals. 

# License

MIT © Prashant Palikhe