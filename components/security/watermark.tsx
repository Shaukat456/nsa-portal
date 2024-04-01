const Watermark = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(255, 255, 255, 0.5)",
        color: "red",
        fontSize: "30px",
        textAlign: "center",
        pointerEvents: "none",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Confidential
    </div>
  );
};

export default Watermark;
