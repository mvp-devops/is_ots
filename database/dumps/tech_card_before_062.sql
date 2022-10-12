PGDMP     ,        
        	    z            ots_test    14.5    14.5     [           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            \           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ]           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ^           1262    171342    ots_test    DATABASE     e   CREATE DATABASE ots_test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE ots_test;
                postgres    false                       1259    174162    technical-card    TABLE       CREATE TABLE public."technical-card" (
    id integer NOT NULL,
    title text NOT NULL,
    code character varying(255) NOT NULL,
    description text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 $   DROP TABLE public."technical-card";
       public         heap    postgres    false                       1259    174161    technical-card_id_seq    SEQUENCE     �   CREATE SEQUENCE public."technical-card_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."technical-card_id_seq";
       public          postgres    false    262            _           0    0    technical-card_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public."technical-card_id_seq" OWNED BY public."technical-card".id;
          public          postgres    false    261            �           2604    174165    technical-card id    DEFAULT     z   ALTER TABLE ONLY public."technical-card" ALTER COLUMN id SET DEFAULT nextval('public."technical-card_id_seq"'::regclass);
 B   ALTER TABLE public."technical-card" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    261    262    262            X          0    174162    technical-card 
   TABLE DATA           b   COPY public."technical-card" (id, title, code, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    262           `           0    0    technical-card_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."technical-card_id_seq"', 61, true);
          public          postgres    false    261            �           2606    174169 "   technical-card technical-card_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."technical-card"
    ADD CONSTRAINT "technical-card_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."technical-card" DROP CONSTRAINT "technical-card_pkey";
       public            postgres    false    262            �           2606    174171 '   technical-card technical-card_title_key 
   CONSTRAINT     g   ALTER TABLE ONLY public."technical-card"
    ADD CONSTRAINT "technical-card_title_key" UNIQUE (title);
 U   ALTER TABLE ONLY public."technical-card" DROP CONSTRAINT "technical-card_title_key";
       public            postgres    false    262            X   ~  x��[�rG}�|�>J	vf/��"U�c>��˥$����r��//yIaa�f!_��,0��Kv�d�6����}zf���;(�vl��^�z�]{��l�������8��;���~��͟�k��#�+.�3�x]^(�����޵�py�;�S�Ї�<�+�vz�K�؍��۾��;}�ys�o��X��ؘ#i���6O�f-m����=&ev�4���!��Qс[v����\a�����
6��u�~�md�~��C��a����P���L*�2��p{*pie"2�l�^�w���9���p�@�'�k	?YT�.(�#$�j�ٷ��>E֔��qՁWi"�	��5z >5�#� |����O �E J��Rjn��.��)qNd�hR-�ܥG�c5�G��A`Zw���� �Z71�E�ؗ��io��8!-��I�<?�L�1R�.[ �0]�QYb>yE��htf�i���$-(�<����6�嶃ɥ�7�"�&����yോԶ1v�����>�.GP�X�ulRz��@8���S��x[�j��h�H�LJ� ��!4��A���+O�,�kC�N�tԱ�929\�U0Su)O��3U��%Ƶ���x�1)ݬ��m���� 0:��Ǥ4�K?�����]13�/	�)E,Ff�p,D@~�	�V��d�dR�K�,�	j��"�$���O�MUx0���8;&e�&w�LU_�8}��1)c8����8���(����cR&��.^��%�L�cd�o��	��-� �6�Vx�|EfUA@�M�Sk�I�	
U	�8ű����\�T�:\屡�����k��ܨ�qƖ�V�2�����pU�$bUf�2P�����CA��F�m�p=�2��ʜХ����R�!W��7ЧQ���E�W��3���`21��I�	oHf��C�{�4,yAyZF�>~�z<�r�������TC&��4�(����	%��09�ɤP���X� ��+�Un�
�4}M�cR���6,Ψ?�� ��LK��lRI��]ĈO9�q�%T��I%��]��c'�o58|� �y�T�J��a��@�T"��8&��(t��;�_�Ou-���cnRI�g��K|E�0���ܤ��������l ���+�4��)Ǥ���U�1�c
/��	��k�LhQ�}̔�	*�|�Q'~�07���(������h��?�
M)̮HYL���Q�����R!�L*�eR���>��;������	��Ѝ������.�,c^	���y����`�+�H1��g����q�0�����/�k:|pJ��S,�G$a�#�K�$ɰ��G�d��Ï���V�~����1n���"�#"S.����,(#tm��B�Tf�a �^1 ܚ�m�1�c�rG2�]w����4�81P�{�i��������Ė�L��0\����Cf^�kZ��M*ͷ�����щXo٤��z�_���m'���ʞƓ�Y���1Ǥ�&&*�DѦ�S�8B�C_��E���q�e��޾1U��ps��sL*m�d�V��	�rI�I��s�5n�����AyRU싆��tL*��
�_.f��l������xYUb1P�b�cRH��ˍЮg�����-�L���ƿM�M�aDJep�p��نk �UUU���
2�G<�HwK�z�[��5`y�o�N	�0U��}f/�P4�|%��1����բ֑N"Zs�R���	+���:�׃��I�&ɴ^]��-S��������ehI�L���*܈��w\XT�:ԼED���,O �U�UBS=�T��z�i��؉@U�����u�� <eM��Ƒn����ڰ5Z�	g�>����E�0;�=�CKZ�Ύo�x�G�ćQ"���t���$���;�b�{���o��Y=�2�6�|̗�'/,\�s$i�5L�j�cRY�Y$B�9n�c���y8@�V�,CI�I��9�'&3x�3�tl
���<�Ё��Y«�k�拷Դ���7"ob�d���1����6H8�� �,�b���cRYkC���1�� ����urL*�7&\@�U� >�=j�W�T�iC��-���D����S���Ҵ�O&�SM)�?*�     