import { useRef, useState } from "react";
import { UploadCloud, X } from "lucide-react";
import { useUpload } from "../hooks/useUpload";

export default function UploadCard({ label = "Upload image" }) {
  const inputRef = useRef();
  const [preview, setPreview] = useState(null);
  const { upload, uploading } = useUpload();

  const handle = async (file) => {
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    await upload(file).catch(() => {});
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => { e.preventDefault(); handle(e.dataTransfer.files?.[0]); }}
      className="relative aspect-[4/5] rounded-3xl glass-strong overflow-hidden cursor-pointer group"
      onClick={() => inputRef.current?.click()}
    >
      <input ref={inputRef} type="file" accept="image/*" className="hidden"
        onChange={(e) => handle(e.target.files?.[0])} />
      {preview ? (
        <>
          <img src={preview} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <button onClick={(e) => { e.stopPropagation(); setPreview(null); }}
            className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-ink/70">
            <X className="h-4 w-4" />
          </button>
          {uploading && <div className="absolute inset-0 shimmer opacity-40" />}
        </>
      ) : (
        <div className="absolute inset-0 grid place-items-center text-center p-6">
          <div>
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-aurora">
              <UploadCloud className="h-6 w-6 text-ink" />
            </div>
            <div className="mt-4 font-display text-xl">{label}</div>
            <div className="mt-1 text-xs text-bone/50">Drag & drop or click · PNG / JPG</div>
          </div>
        </div>
      )}
    </div>
  );
}
