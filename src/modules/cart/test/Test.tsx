import { TestContainer } from "./stylesTes";

function Test() {
  return (
    <TestContainer>
      <section>
        <article>
          <div>scroll test............</div>
          <br />
          <br />
          <div className="scroll-container">
            <div className="scroll-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum tristique mauris, nec
                tincidunt ex lacinia eget. Duis in interdum arcu. Morbi ac pulvinar justo. Vivamus auctor sapien ut ex
                dictum tincidunt.
              </p>
            </div>
          </div>
        </article>
      </section>
    </TestContainer>
  );
}

export default Test;
