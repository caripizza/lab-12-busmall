import html from './html.js';

function makeTemplate() {
    return html`
    <header>
        <h1>BusMall: Focus Group Survey</h1>
    </header>
    <p id="progress-count">Your Progress:</p>
    <div id="details">
            Choose your favorite out of 3
    </div>
    <div id="vote">
            Which product do you prefer?
            <form id="next-slide">
        <button id="vote-button">Next (form submit?)</button>
        <fieldset>
            <div id="photo-area">
                <ul id="photos">
                </ul>
            </div>

        </fieldset>
            </form>
    </div>
    <hr>`;
}

export default class App {
    constructor() {
        this.products = productsApi.getAll();
        this.totalCount = 0;
    }

    render() {
        let dom = makeTemplate();

        // product viewer
        let productsDisplay = dom.querySelector('.video-viewer');

        let firstChannel = this.channels[0];
        let viewer = new VideoViewer(firstChannel);
        productsDisplay.appendChild(viewer.render());


        let channelSelector = new ChannelSelector(this.channels, channel => {
            channel.count++;
            this.totalCount++;
            channelsApi.save();
            viewer.update(channel);
        });

        let selectorSection = dom.querySelector('.channel-selector');
        selectorSection.appendChild(channelSelector.render());


        return dom;
    }
}