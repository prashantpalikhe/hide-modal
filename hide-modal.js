((() => {
    let possibleModalElements = [];

    const modalCandidate = getModalCandidate();

    if (modalCandidate) {
        possibleModalElements.push(modalCandidate);

        const backdropCandidate = getBackdropCandidate(modalCandidate);

        if (backdropCandidate) {
            possibleModalElements.push(backdropCandidate);
        }

        if (areModalElements(possibleModalElements)) {
            destroy(possibleModalElements);

            console.log('%cModal destroyed', 'background: green; color: white; padding: 5px;');
        }

    } else {
        console.log('%cSorry, no modals were found!', 'background: red; color: white, padding: 5px');
    }

    function getModalCandidate() {
        let modalCandidate = getRootNode(getElementInCenterOfViewport());

        modalCandidate.style.visibility = 'hidden';

        if (getElementInCenterOfViewport() === document.body) {
            modalCandidate = null;
        }

        modalCandidate.style.visibility = 'visible';

        return modalCandidate;
    }

    function getBackdropCandidate(modalCandidate) {
        modalCandidate.style.visibility = 'hidden';

        let backdropCandidate = getElementInCenterOfViewport();

        if (backdropCandidate.offsetWidth !== getViewportDimensions().width
            || backdropCandidate.offsetHeight !== getViewportDimensions().height
            || backdropCandidate.children.length !== 0) {
            backdropCandidate = null;
        }

        modalCandidate.style.visibility = 'visible';

        return backdropCandidate;
    }

    function areModalElements(elements) {
        elements.forEach(element => {
            element.style.visibility = 'hidden';
        });

        const result = getElementInCenterOfViewport() !== document.body;

        elements.forEach(element => {
            element.style.visibility = '';
        });

        return result;
    }

    function getRootNode(element) {
        let rootNode;
        let parentNode = element.parentNode;

        if (parentNode === document.body) {
            rootNode = element;

        } else {
            while (parentNode !== document.body) {
                rootNode = parentNode;

                parentNode = parentNode.parentNode;
            }
        }

        return rootNode;
    }

    function getElementInCenterOfViewport() {
        return document.elementFromPoint(
            getViewportDimensions().width / 2,
            getViewportDimensions().height / 2
        );
    }

    function getViewportDimensions() {
        if (!getViewportDimensions.cachedVal) {
            getViewportDimensions.cachedVal = {
                width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
            };
        }

        return getViewportDimensions.cachedVal;
    }

    function destroy(possibleModalElements) {
        possibleModalElements.forEach(modalElement => {
            modalElement.parentNode.removeChild(modalElement);
        });

        document.body.style.overflow = 'auto';
    }
}))();
