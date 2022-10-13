PGDMP         (            	    z            ots_test    14.5    14.5     ]           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ^           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            _           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            `           1262    171342    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false            �            1259    171644    summary-list-of-equipments    TABLE     \  CREATE TABLE public."summary-list-of-equipments" (
    id integer NOT NULL,
    "projectId" integer,
    "unitId" integer,
    "subUnitId" integer NOT NULL,
    "facilityId" integer,
    "installationLocation" character varying(255),
    "systemType" character varying(255)[] DEFAULT ARRAY['РСУ'::character varying(255)],
    "facilityModification" character varying(255) DEFAULT 'н/д'::character varying,
    "factoryNumber" character varying(255) DEFAULT 'н/д'::character varying,
    tag character varying(255),
    "controlledParameter" character varying(255),
    year character varying(255),
    month character varying(255),
    period character varying(255),
    specification character varying(255),
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 0   DROP TABLE public."summary-list-of-equipments";
       public         heap    postgres    false            �            1259    171643 !   summary-list-of-equipments_id_seq    SEQUENCE     �   CREATE SEQUENCE public."summary-list-of-equipments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."summary-list-of-equipments_id_seq";
       public          postgres    false    216            a           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public."summary-list-of-equipments_id_seq" OWNED BY public."summary-list-of-equipments".id;
          public          postgres    false    215            �           2604    171647    summary-list-of-equipments id    DEFAULT     �   ALTER TABLE ONLY public."summary-list-of-equipments" ALTER COLUMN id SET DEFAULT nextval('public."summary-list-of-equipments_id_seq"'::regclass);
 N   ALTER TABLE public."summary-list-of-equipments" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            Z          0    171644    summary-list-of-equipments 
   TABLE DATA           "  COPY public."summary-list-of-equipments" (id, "projectId", "unitId", "subUnitId", "facilityId", "installationLocation", "systemType", "facilityModification", "factoryNumber", tag, "controlledParameter", year, month, period, specification, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   �       b           0    0 !   summary-list-of-equipments_id_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public."summary-list-of-equipments_id_seq"', 48, true);
          public          postgres    false    215            �           2606    171654 :   summary-list-of-equipments summary-list-of-equipments_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_pkey" PRIMARY KEY (id);
 h   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_pkey";
       public            postgres    false    216            �           2606    171670 E   summary-list-of-equipments summary-list-of-equipments_facilityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."summary-list-of-equipments"
    ADD CONSTRAINT "summary-list-of-equipments_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES public.facilities(id) ON UPDATE CASCADE ON DELETE CASCADE;
 s   ALTER TABLE ONLY public."summary-list-of-equipments" DROP CONSTRAINT "summary-list-of-equipments_facilityId_fkey";
       public          postgres    false    216            Z     x�͘MnA��S��>r�맧ΐD9@6�	KV�;d�e��#��	vO��B��7�S�Us����.t뻇�b�Y��ۻ�������������b�ެ�O����_Z?�owO��^�v�~�[n����f�����-nW��9y��c�仇�����׫��n}x?|���K�J}�8/�;��A@'%|���ɠ����9)�q�xu>���0�"�A�n(J�#R6T��N/ř4���O���0E@f��Xh�75�z��~�u�;am+50Y�P�5AG	�eh`���]�4EP�Ү*䝐�B���w���StڬϪ]J�k8" 6�A+NQ��  ��u�Zh��=P4�!xRP5�  ��ЗлH�M7�.���	]��:E`v�:�IVƇ�Y��u�]��*�аI{�Cg-4�o�6i�q3eŤ[hؤ�B#*�"@�&]������C1�����@�S�Pg�8(�"@�Q	�&����"@�}(��c�5� `���L�A��-64�Bى��ሀ�&�1���>�n��A� �~����p�
��L�ѡA����Phpa~Z<E���F-�NY�JGl8g�ǣ���6�4j�B5��^����	*wC����P��C��v�[���Zb�D����! ��R��C�Ԋ���fWJ>�����0�f�fW��'�`�ih���a,4����I�� �vv��40��!�\C�@^�Z������f�D�! lXA �+�>; �?r#�     