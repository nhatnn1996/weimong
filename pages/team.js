import Image from 'next/image';

const list = [
  { src: 'ChienPhan.png', name: 'Chien Phan', title: 'Tribal' },
  { src: 'LyL.png', name: 'LyL', title: 'Manage' },
  { src: 'KienNguyen.png', name: 'Kien Nguyen', title: 'Blockchain Developer' },
  { src: 'DuyDuy.png', name: 'Duy Duy', title: 'Game Developer' },
  { src: 'BachNguyen.png', name: 'Bach Nguyen', title: 'Frontend Developer' },
  { src: 'HuongNgo.png', name: 'Huong Ngo', title: 'Artist Leader' },
  { src: 'TruongHuu.png', name: 'Truong Huu', title: 'Artist' },
  { src: 'HuyTuyen.png', name: 'Huy Tuyen', title: 'Artist' },
  { src: 'ThuyDuong.png', name: 'Thuy Duong', title: 'Designer' },
  { src: 'ChunHoang.png', name: 'Chun Hoang', title: 'Animation' },
  { src: 'CuongNguyen.png', name: 'Cuong Nguyen', title: 'Animation, VFX' }
];
export default function Roadmap() {
  return (
    <div className="px-8 xl:pb-10 2xl:px-20">
      <div className="text-center text-2xl-s">Our team</div>
      <div className="flex flex-wrap mt-20">
        {list.map((element) => {
          return (
            <div className="w-12/12 xl:w-3/12 mb-6 flex items-end" key={element.src}>
              <div className="relative w-[135px]">
                <Image src={'/member/' + element.src} alt="not found" layout="responsive" width="100%" height="108%" />
              </div>
              <div className="mb-4 ml-4">
                <div className="font-bold text-xl text-[#7d4f31]">{element.name}</div>
                <div className="text-[#c79b63] text-lg">({element.title})</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
Roadmap.layout = 'full';
