let activeDocumentUrl=null;
openDocument=async function(index){
  activeDoc=index;
  const documentMeta=selected.documents[index];
  document.querySelector('#modalType').textContent=documentMeta.type.toUpperCase();
  document.querySelector('#modalName').textContent=selected.name;
  document.querySelector('#previewFile').textContent=documentMeta.file;
  document.querySelector('#previewSize').textContent=sizeLabel(documentMeta.size);
  document.querySelector('#modalVerify').textContent=documentMeta.state==='verified'?'Verified ✓':'Mark as verified';
  const preview=document.querySelector('#actualDocument');
  preview.innerHTML='<p>Loading submitted document…</p>';
  document.querySelector('#documentModal').showModal();
  try{
    const stored=await getDocumentBlob(documentMeta.blobId);
    if(!stored?.blob){preview.innerHTML='<p>This file is not stored in this browser. Ask the driver to submit it again.</p>';return}
    if(activeDocumentUrl)URL.revokeObjectURL(activeDocumentUrl);
    activeDocumentUrl=URL.createObjectURL(stored.blob);
    if(stored.mime.startsWith('image/'))preview.innerHTML=`<img src="${activeDocumentUrl}" alt="${documentMeta.type} submitted by ${selected.name}">`;
    else if(stored.mime==='application/pdf')preview.innerHTML=`<iframe src="${activeDocumentUrl}" title="${documentMeta.type} submitted by ${selected.name}"></iframe>`;
    else preview.innerHTML='<p>Preview unavailable for this file type.</p>';
  }catch(previewError){preview.innerHTML='<p>The submitted document could not be opened.</p>'}
};
document.querySelector('#closeModal').addEventListener('click',()=>{if(activeDocumentUrl){URL.revokeObjectURL(activeDocumentUrl);activeDocumentUrl=null}});
